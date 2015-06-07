<script type="text/javascript">
        $(document).ready(function () {
            $("#uploadForm").submit(function () {
                var form = document.getElementById('uploadForm');
                var id = document.getElementById("id").value;
                //$("#spinner").append('<img src="spinner.gif"></div>').fadeIn(1000);
                
                //recoge los datos del formulario para pasarlos al servidor.
                oformData = new FormData(form);
                oformData.append("id", id);
                
                this.timer = setTimeout(function () {
                    $.ajax({
                        url: 'subir',
                        processData: false,
                        contentType: false,
                        enctype: 'multipart/form-data',
                        mimeType:"multipart/form-data",
                        data: oformData, 
                        //data: 'filename=' + $('#file').val(),
                        type: 'post',
                        success: function (msg) {
                            //$("#spinner").fadeOut(1000);
                            $("#spinner").empty().append(msg);
                        }

                    });
                }, 200);
                return false;
            });

        });
        

    </script>
    
    <div class="row page_subir_imagen">
        <h2>SELECCIONA TU PORTADA</h2>
        <div>
            <form id="uploadForm" action="subir" method="post" enctype="multipart/form-data">

                <input type="hidden" name="id" id="id"/><br/><br/>

                <input type="file" name="file" id="file" class="file_subida"/><br/><br/>

                <input type="submit" value="Subir portada" class="btn"/><br/>
            </form> 
            <div id="spinner"></div>
        </div>
    </div>