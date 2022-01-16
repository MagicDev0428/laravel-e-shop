// ajax set up
$.ajaxSetup({
    headers : {
        'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
    }
})

// add to cart functionality
add_to_cart = (element)=>{
    let parent = element.parentElement;
    let id = parent.querySelector('.cart_id').value;
    console.log(id)
    let form = new FormData();
    form.append('id',id);
    let url = parent.parentElement.querySelector('form').getAttribute('action');
    let type = parent.parentElement.querySelector('form').getAttribute('method');
    $.ajax({
        url :url,
        method : type,
        data : form,
        processData : false,
        dataType : 'json',
        contentType : false,
        success : function(response){
            $('#add-category').modal('hide')
            if (response.msg = 'success') {
                $('.cat_name').val('');
                Swal.fire(
                    'Added',
                    'Category added successfully.',
                    'success'
                )
                console.log(response)
            }
            else{
                Swal.fire(
                    'Error',
                    'Error adding category.',
                    'danger'
                )
            }
        }
    
    })
}