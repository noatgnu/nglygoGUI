import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewEncapsulation, Input, AfterViewInit } from '@angular/core';
import {D3Service, D3, ScaleQuantile, ScaleLinear, Selection, Transition, Axis} from 'd3-ng2-service';
import {Query} from '../query';
import {AlignmentData} from '../alignment-data';

@Component({
  selector: 'app-alignment-viewer',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './alignment-viewer.component.html',
  styleUrls: ['./alignment-viewer.component.css']
})
export class AlignmentViewerComponent implements OnInit, AfterViewInit {
  @Input('query') query: Query;
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  legend: any;
  alignSize: number;
  seqLabels: any;
  quant = [];
  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.query);
    const d3 = this.d3;
    let svg: any;
    const colors = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'];
    const gridSize = 15;

    const padding = gridSize * 2;

    for (let i = 0; i < this.query.alignment.length; i ++) {
      this.quant.push(0);
    }

    this.alignSize = Object.keys(this.query.alignment.alignment).length;

    const width = gridSize * this.query.alignment.length;
    const height = gridSize * this.alignSize;
    const ArrayPosition = [];
    for (let a = 0; a < this.query.alignment.length; a ++) {
      ArrayPosition.push(a * gridSize);
    }

    let cards: any;

    if (this.parentNativeElement !== null) {
      const scaleDomain = d3.extent(this.query.alignmentDF, function(d) {return d.value; });
      const colorScale = d3.scaleQuantile<string>().domain(scaleDomain).range(colors);

      svg = d3.select(this.parentNativeElement)
        .append('svg')
        .attr('width', padding * 2 + width)
        .attr('height', padding * 2 + height)
        .append('g')
        .attr('transform', 'translate(' + padding + ',' + padding + ')');

      this.drawLegend(svg, colorScale, gridSize, colors);
      this.drawSeqLabels(svg, gridSize, padding);

      const aaQuant = svg.selectAll('.aaQuant').data(this.quant);
      const quantGroup = aaQuant.enter().append('g');
      const qunatBlock = quantGroup.append('rect')
        .attr('x', function(d, i) {return i * gridSize; })
        .attr('y', gridSize / 3)
        .attr('width', gridSize).attr('height');
      const aaPosition = svg.selectAll('.aaPosition').data(ArrayPosition).enter();
      const aaPositionText = aaPosition.append('text').text(function(d, i){return (i + 1) + '|'; })
        .attr('x', function(d) { return d; })
        .attr('y', 0)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(' + gridSize / 2 + ', -6)')
        .attr('class',  function(d, i) { return  'aaPositionText axis p' + (i + 1); });

      console.log(scaleDomain);


      cards = svg.selectAll('.aaBlock').data(this.query.alignmentDF);

      const aaBlock = cards.enter().append('g').attr('class', 'aaBlock').on('mouseover', function(d) {
        const posBlockSelection = svg.selectAll('.aaBlock .p' + d.pos).transition().duration(0).style('stroke', '#000');
        const posTitleSelection = svg.selectAll('text.aaPositionText.p' + d.pos).transition().duration(0).style('font-size', '10pt').style('fill', '#000');
      }).on('mouseout', function(d) {
        const posSelection = svg.selectAll('.aaBlock .p' + d.pos).transition().duration(0).style('stroke', 'white');
        const posTitleSelection = svg.selectAll('text.aaPositionText.p' + d.pos).transition().duration(0).style('font-size', '5pt').style('fill', '#aaa');
      });
      const rectAABlock = aaBlock.append('rect')
        .attr('x', function(d) {return (d.pos - 1) * gridSize; })
        .attr('y', function(d) {
          return d.yCoord * gridSize + padding ;
        })
        //.attr('rx', 3)
        //.attr('ry', 3)
        .attr('class', function (d) {
          let assignClass = 'p' + d.pos + ' bordered ';
          if (d.extra.hasOwnProperty('topDomType')) {
            assignClass += d.extra['topDomType'];
          }
          return assignClass;
        })
        .attr('width', gridSize)
        .attr('height', gridSize)
        .style('fill', '#ffffd9');
      rectAABlock.append('title').text(function(d) {return d.value; });
      aaBlock.transition().duration(1000)
        .style('fill', function(d) { return colors[colorScale(d.value)]; });
      aaBlock.append('text')
        .text(function(d) {return d.aa; })
        .attr('class', 'aa-residue')
        .attr('x', function(d) {return (d.pos - 1) * gridSize + gridSize / 5; })
        .attr('y', function(d) {
          return (d.yCoord + 1) * gridSize - gridSize / 5 + padding ; })
        .style('font-size', '8pt');
      cards.select('title').text(function(d) { return d.value; });
      aaBlock.exit().remove();

      svg.exit();
    }
  }

  compare(a, b) {
    if (a.ind < b.ind) {
      return -1;
    }

    if (a.ind > b.ind) {
      return 1;
    }

    return 0;
  }

  drawLegend(svg, colorScale, gridSize, colors) {
    this.legend = svg.selectAll('.legend')
      .data([0].concat(colorScale.quantiles()), function(d) { return d; });

    const legendScale = this.legend.enter().append('g')
      .attr('class', 'legend');

    const legendBlock = legendScale.append('rect')
      .attr('x', function(d, i) { return gridSize * 2 * i; })
      .attr('y', gridSize)
      .attr('width', gridSize * 2)
      .attr('height', gridSize / 2)
      .style('fill', function(d, i) { return colors[i]; });

    legendScale.append('text')
      .attr('class', 'mono')
      .text(function(d) { return '≥ ' + Math.round(d); })
      .attr('x', function(d, i) { return gridSize * 2 * i; })
      .attr('y', gridSize);

    legendScale.exit();
  }

  drawSeqLabels(svg, gridSize, padding) {

    this.seqLabels = svg.selectAll('.seqLabels')
      .data(this.query.alignment.seqIdArray)
      .enter().append('text').text(function (d) {
        return d.seqId;
      })
      .attr('x', 0).attr('y', function(d) {return d.yCoord * gridSize + padding ; }).style('text-anchor', 'end')
      .attr('transform', 'translate(-6,' + gridSize / 1.5 + ')').attr('class', 'seqLabels mono axis');
    this.seqLabels.exit();
  }

  drawAlignBlockGroup(alignmentG, data, gridSize, padding, x, y) {
    const blockGroup = alignmentG.append('g').attr('class', 'aaBlockGroup');

  }

  drawAlignBlockGraphic(aaBlock, gridSize, padding, x, y) {
    const rectAABlock = aaBlock.append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('rx', 10)
      .attr('ry', 10)
      .attr('class', 'bordered')
      .attr('width', gridSize)
      .attr('height', gridSize)
      .style('fill', '#ffffd9');
  }
}
