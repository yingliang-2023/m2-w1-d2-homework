<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      
      <script>
         $(document).ready(function() {
            $("#btn").click(function(event){

               //Add a div element within the body
               $('body').append('<div id="showinfo"></div>');

               //Add paragraph elements within the div
               $('#showinfo').append('<p></p>');
               $('#showinfo').append('<p></p>');
               $('#showinfo').append('<p></p>');
            
               //Load data from json file to each paragraphs
               $.getJSON('/jq/result.json', function(jqdata) {
                  $('#showinfo p:first-child').append('NAME: ' + jqdata.name);
                  $('#showinfo p:nth-child(2)').append('AGE: ' + jqdata.age);
                  $('#showinfo p:last-child').append('SEX: ' + jqdata.sex);
               });
					
            });
         });
      </script>