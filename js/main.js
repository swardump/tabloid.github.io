$(function (){
    let nameTeam1 = '';
    let nameTeam2 = '';
    let leftScore = 0;
    let rightScore = 0;
    let leftCurrentScore = 0;
    let rightCurrentScore = 0;

    $('#clearTeam').click(function() {
        location.reload();
    });

    $('#changeTeam').click(function() {
        let tmpNameTeam1 = $('#team-1').val();
        $('#team-1').val($('#team-2').val());
        $('#team-2').val(tmpNameTeam1);

        let tmpLeftScore = leftScore;
        leftScore = rightScore;
        rightScore = tmpLeftScore;

        let tmpLeftCurrentScore = leftCurrentScore;
        leftCurrentScore = rightCurrentScore;
        rightCurrentScore = tmpLeftCurrentScore;
    });

    $('#saveBtn').click(function(){
        nameTeam1 = $('#team-1').val();
        nameTeam2 = $('#team-2').val();

        if(nameTeam1 == '' && nameTeam2 == '') {
            alert('Название команды не может быть пустым!');
            return;
        }

        $('#params').hide();
        $('#match').show();

        $('.nameTeamLeft').html('<b>'+nameTeam1+'</b>');
        $('.nameTeamRight').html('<b>'+nameTeam2+'</b>');

        $('.leftScore').html('<b>'+leftScore+'</b>');
        $('.rightScore').html('<b>'+rightScore+'</b>');

        $('.leftCurrentScore').html('<b>'+leftCurrentScore+'</b>')
        $('.rightCurrentScore').html('<b>'+rightCurrentScore+'</b>')
    });

    $('#closeBtn').click(function() {
        $('#params').show();
        $('#match').hide();
    });

    $('.teamLeft').click(function(){
        leftScore++;
        $('.leftScore').html('<b>'+leftScore+'</b>');
    });

    $('.teamRight').click(function(){
        rightScore++
        $('.rightScore').html('<b>'+rightScore+'</b>');
    });

    $('.leftCurrentScore').click(function(){
        leftCurrentScore++;
        $('.leftCurrentScore').html('<b>'+leftCurrentScore+'</b>')
    });

    $('.rightCurrentScore').click(function(){
        rightCurrentScore++;
        $('.rightCurrentScore').html('<b>'+rightCurrentScore+'</b>');
    });

    $('#decLeftCurrentScore').click(function(){
        if(leftCurrentScore > 0) {
            leftCurrentScore--;
            $('.leftCurrentScore').html('<b>'+leftCurrentScore+'</b>');
        }
        
    });

    $('#decRightCurrentScore').click(function(){
        if(rightCurrentScore > 0) {
            rightCurrentScore--;
            $('.rightCurrentScore').html('<b>'+rightCurrentScore+'</b>');
        }
    });

    $('#clearCurrentScore').click(function() {
        leftCurrentScore = 0;
        rightCurrentScore = 0;
        $('.leftCurrentScore').html('<b>'+leftCurrentScore+'</b>')
        $('.rightCurrentScore').html('<b>'+rightCurrentScore+'</b>')
    });
})