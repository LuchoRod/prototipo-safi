$(document).ready(function(){var i,e=function(){$("#sparkline1").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#6658dd",fillColor:"rgba(102, 88, 221, 0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$("#sparkline1").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:"#1abc9c",fillColor:"rgba(26, 188, 156, 0.3)",composite:!0,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1}),$(".sparkline2").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"3",barColor:"#4a81d4"}),$("#sparkline3").sparkline([20,40,30,10],{type:"pie",width:"165",height:"165",sliceColors:["#4fc6e1","#f7b84b","#e3eaef","#f1556c"]}),$("#sparkline4").sparkline([0,23,43,35,44,45,56,37,40],{type:"line",width:"100%",height:"165",chartRangeMax:50,lineColor:"#2d7bf4",fillColor:"transparent",lineWidth:2,highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)",maxSpotColor:!1,minSpotColor:!1,spotColor:!1}),$("#sparkline4").sparkline([25,23,26,24,25,32,30,24,19],{type:"line",width:"100%",height:"165",chartRangeMax:40,lineColor:"#4eb7eb",fillColor:"transparent",composite:!0,lineWidth:2,maxSpotColor:!1,minSpotColor:!1,spotColor:!1,highlightLineColor:"rgba(0,0,0,1)",highlightSpotColor:"rgba(0,0,0,1)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"line",width:"100%",height:"165",lineColor:"#e3eaef",lineWidth:2,fillColor:"rgba(227,234,239,0.3)",highlightLineColor:"rgba(0,0,0,.1)",highlightSpotColor:"rgba(0,0,0,.2)"}),$("#sparkline6").sparkline([3,6,7,8,6,4,7,10,12,7,4,9,12,13,11,12],{type:"bar",height:"165",barWidth:"10",barSpacing:"5",composite:!0,barColor:"#6c757d"}),$("#sparkline7").sparkline([4,6,7,7,4,3,2,1,4,4,5,6,3,4,5,8,7,6,9,3,2,4,1,5,6,4,3,7],{type:"discrete",width:"280",height:"165",lineColor:"#36404c"}),$("#sparkline8").sparkline([10,12,12,9,7],{type:"bullet",width:"280",height:"80",targetColor:"#64c5b1",performanceColor:"#5553ce"}),$("#sparkline9").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100],{type:"box",width:"280",height:"80",boxLineColor:"#5553ce",boxFillColor:"#f1f1f1",whiskerColor:"#32c861",outlierLineColor:"#c17d7d",medianColor:"#22e535",lineWidth:2,targetColor:"#316b1d"}),$("#sparkline10").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1],{height:"80",width:"100%",type:"tristate",posBarColor:"#0acf97",negBarColor:"#e3eaef",zeroBarColor:"#ff679b",barWidth:8,barSpacing:3,zeroAxis:!1})},r=function(){var e,r=-1,l=-1,t=0,a=[];$("html").mousemove(function(o){var i=o.pageX,e=o.pageY;-1<r&&(t+=Math.max(Math.abs(i-r),Math.abs(e-l))),r=i,l=e});var h=function(){var o=(new Date).getTime();if(e&&e!=o){var i=Math.round(t/(o-e)*1e3);a.push(i),30<a.length&&a.splice(0,1),t=0,$("#sparkline5").sparkline(a,{tooltipSuffix:" pixels per second",type:"line",width:"100%",height:"165",chartRangeMax:77,maxSpotColor:!1,minSpotColor:!1,spotColor:!1,lineWidth:1,lineColor:"#f1556c",fillColor:"rgba(241, 85, 108, 0.3)",highlightLineColor:"rgba(24,147,126,.1)",highlightSpotColor:"rgba(24,147,126,.2)"})}e=o,setTimeout(h,500)};setTimeout(h,500)};e(),r(),$(window).resize(function(o){clearTimeout(i),i=setTimeout(function(){e(),r()},300)})});