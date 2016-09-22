angular.module('starter.directives',[])
  .directive('map',function () {
      return {
        template:'<div id="allmap"></div>',
        link:function (scope,element,attrs) {
          var map = new BMap.Map("allmap");
          var point = new BMap.Point(116.331398,39.897445);
          map.centerAndZoom(point,12);
          // 创建地址解析器实例
          var myGeo = new BMap.Geocoder();
          // 将地址解析结果显示在地图上,并调整地图视野
          scope.$watch('address',function (newVal,oldVal) {
            map.clearOverlays();
            myGeo.getPoint(newVal, function(point){
              if (point) {
                map.centerAndZoom(point, 16);
                map.addOverlay(new BMap.Marker(point));
              }else{
                //alert("您选择地址没有解析到结果!");
              }
            }, "北京市");
          })
        },
        scope:{
          address:'='
        }
      }
  });
