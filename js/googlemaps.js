
      function initMap() {

      var locations = [
            [('<div id="iw-container">' +
                    '<div class="iw-title">Campus Cycles</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">2102 S Washington St<br>Denver, CO 80210<br></div>' +
                      '<p>'+
                      'Phone: (303) 698-2811<br>'+ '<a href="https://goo.gl/RNY3Ei" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'), 39.678434, -104.978936, 4],
            // [('<div id="iw-container">' +
            //         '<div class="iw-title">Campus Cycles</div>' +
            //         '<div class="iw-content">' +
            //           '<div class="iw-subTitle">South Washington Street</div>' +
            //           '<p>2102 S Washington St<br>Denver, CO 80210<br>'+
            //           '<br>Phone: (303) 698-2811<br>'+ '<a href="https://goo.gl/RNY3Ei" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
            //         '</div>' +
            //         '<div class="iw-bottom-gradient"></div>' +
            //       '</div>'), 39.678434, -104.978936, 4],
            [('<div id="iw-container">' +
                    '<div class="iw-title">Bicycle Village - Aurora</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">2802 S Havana St<br>Aurora, CO 80014</div>' +
                      '<p>'+
                      'Phone: (303) 750-1064<br>'+ '<a href="https://goo.gl/ECnruk" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'), 39.665513, -104.864825, 5],
            // ['Bicycle Village - Aurora, South Havana Street, Aurora, CO', 39.665513, -104.864825, 5, "https://www.amazon.com"],
            [('<div id="iw-container">' +
                    '<div class="iw-title">Bicycle Village - Littleton</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">8100 W Crestline Ave<br>Littleton, CO 80123</div>' +
                      '<p>'+
                      'Phone: (303) 978-9699<br>'+ '<a href="https://goo.gl/pYqk8z" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'), 39.616836, -105.088404, 3],
            // ['Bicycle Village - Littleton, West Crestline Avenue, Littleton, CO', 39.616836, -105.088404, 3],
            [('<div id="iw-container">' +
                    '<div class="iw-title">Bicycle Village - Westminster</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Brookhill Shopping Center, 9170 Wadsworth Pkwy<br>Westminster, CO 80021</div>' +
                      '<p>'+
                      'Phone: (303) 421-4001<br>'+ '<a href="https://goo.gl/wwKw5K" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'), 39.862467, -105.081046, 2],
            // ['Bicycle Village - Westminster, Wadsworth Parkway, Westminster, CO', 39.862467, -105.081046, 2],
            [('<div id="iw-container">' +
                    '<div class="iw-title">Bicycle Village - Boulder</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Crossroad Commons, 2100 28th St<br>Boulder, CO 80301</div>' +
                      '<p>'+
                      'Phone: (303) 440-8525<br>'+ '<a href="https://goo.gl/FUHeqe" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'), 40.023951, -105.257341, 1],
            // ['Bicycle Village - Boulder, 28th Street, Boulder, CO', 40.023951, -105.257341, 1],
            [('<div id="iw-container">' +
                    '<div class="iw-title">Bicycle Village - Colorado Springs</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">2450 Montebello Square Dr<br>Colorado Springs, CO 80918</div>' +
                      '<p>'+
                      'Phone: (719) 265-9346<br>'+ '<a href="https://goo.gl/diUoJU" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'),38.908697,-104.781862 ,6]
            // ['Bicycle Village - Colorado Springs, Montebello Square Drive, Colorado Springs, CO',38.908697,-104.781862 ,6],
            // [('<div id="iw-container">' +
            //         '<div class="iw-title">Broadway & Mexico Self Storage</div>' +
            //         '<div class="iw-content">' +
            //           '<div class="iw-subTitle">1699 S Broadway<br>Denver, CO 80210</div>' +
            //           '<p>'+
            //           'Phone: (303) 733-3300<br>'+ '<a href="https://goo.gl/UwSfqs" target="_blank" class="iw-directions">Directions</a>' +'</p>'+
            //         '</div>' +
            //         '<div class="iw-bottom-gradient"></div>' +
            //       '</div>'),39.686191,-104.987755 ,7]
            // ['Broadway & Mexico Self Storage, South Broadway, Denver, CO',39.686191,-104.987755 ,7]
          ];

          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            // maxWidth: 350,
            center: new google.maps.LatLng(39.674010, -104.966350),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });

          // var infowindow = new google.maps.InfoWindow();
          var infowindow = new google.maps.InfoWindow({

            // Assign a maximum value for the width of the infowindow allows
            // greater control over the various content elements
            maxWidth: 350
          });

          var marker, i;

          for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map
              // zIndex: locations[3]
              // url: locations[4]
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                // window.locations.href = this.url;
              }
            })(marker, i));
          }
          // START INFOWINDOW CUSTOMIZE.
            // The google.maps.event.addListener() event expects
            // the creation of the infowindow HTML structure 'domready'
            // and before the opening of the infowindow, defined styles are applied.
            // *
            // google.maps.event.addListener(infowindow, 'domready', function() {
            //
            //   // Reference to the DIV that wraps the bottom of infowindow
            //   var iwOuter = $('.gm-style-iw');
            //
            //   /* Since this div is in a position prior to .gm-div style-iw.
            //    * We use jQuery and create a iwBackground variable,
            //    * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
            //   */
            //   var iwBackground = iwOuter.prev();
            //
            //   // Removes background shadow DIV
            //   iwBackground.children(':nth-child(2)').css({'display' : 'none'});
            //
            //   // Removes white background DIV
            //   iwBackground.children(':nth-child(4)').css({'display' : 'none'});
            //
            //   // Moves the infowindow 115px to the right.
            //   iwOuter.parent().parent().css({left: '115px'});
            //
            //   // Moves the shadow of the arrow 76px to the left margin.
            //   iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
            //
            //   // Moves the arrow 76px to the left margin.
            //   iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});
            //
            //   // Changes the desired tail shadow color.
            //   iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});
            //
            //   // Reference to the div that groups the close button elements.
            //   var iwCloseBtn = iwOuter.next();
            //
            //   // Apply the desired effect to the close button
            //   iwCloseBtn.css({opacity: '1', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
            //
            //   // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            //   if($('.iw-content').height() < 140){
            //     $('.iw-bottom-gradient').css({display: 'none'});
            //   }
            //
            //   // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            //   iwCloseBtn.mouseout(function(){
            //     $(this).css({opacity: '1'});
            //   });
            // });







//           google.maps.event.addListener(marker, 'click', function() {
//     window.location.href = this.url;
// });
// google.maps.event.addDomListener(window, 'load', initialize);
}
