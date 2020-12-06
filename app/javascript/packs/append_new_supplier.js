$(document).ready(() => {
    var i = 2.0;
    var j = 2.0;
    $('.append-new-supplier').on('click', function() {
        if($('.update').css('display') == 'block') {
            $('.update').css('display', 'none');
            j = j + 1;
        };
        if(i % 2 == 0) {
            $('.add').css('display', 'block');
        } else {
            $('.add').css('display', 'none');
        }
        i = i + 1.0;
    })
    $('.update-supplier').on('click', function() {
        if($('.add').css('display') == 'block') {
            $('.add').css('display', 'none');
            i = i + 1;
        };
        if(j % 2 == 0) {
            $('.update').css('display', 'block');
        } else {
            $('.update').css('display', 'none');
        }
        j = j + 1.0;
    })

    $('.add-new-supplier').on('click', function() {
        let name = $('.supplier-name').val();
        let agent = $('.supplier-agent').val();
        let phone = $('.supplier-phone').val();
        $.ajax({
            url: '/suppliers',
            method: 'post',
            data: {
                name: name,
                agent: agent,
                agent_phone: phone
            },
            success: () => {
              window.location.reload();
            }
        });
    })

    $('.update-old-supplier').on('click', function() {
        let userId = $('.user-checkbox:checked').toArray().map(a => a.id)[0];
        let name = $('.u_supplier-name').val();
        let agent = $('.u_supplier-agent').val();
        let phone = $('.u_supplier-phone').val();
        $.ajax({
            url: '/suppliers/' + userId.toString(),
            method: 'put',
            data: {
                name: name,
                agent: agent,
                agent_phone: phone
            },
            success: () => {
              window.location.reload();
            }
        });
    })
  });