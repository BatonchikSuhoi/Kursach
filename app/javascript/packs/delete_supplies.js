$(document).ready(() => {
    $('.user-checkbox').change(e => {
      let allChecked = $('.user-checkbox:checked').length == $('.user-checkbox').length;
      $('#checkall').prop('checked', allChecked);
    });
    
    $('#checkall').change(e => {
      $('.user-checkbox').prop('checked', e.target.checked);
    });
  
    $('.delete-supply').click(() => {
      let userIds = $('.user-checkbox:checked').toArray().map(a => a.id);
      $.ajax({
        url: '/supplies/destroy',
        method: 'delete',
        data: {
          user_ids: userIds
        },
        success: () => {
          window.location.reload();
        }
      });
    })
  });