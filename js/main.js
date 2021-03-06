$(document).ready(function(){
    var timing = 'cubic-bezier(0.7,0,0.3,1)';
   Moveit.put(first, {
      start: '0%',
      end: '14%'
    }); 
    Moveit.put(middle, {
      start: '0%',
      end: '100%'
    }); 
    Moveit.put(second, {
      start: '0%',
      end: '11.5%'
    }); 
    
    var open = false;
    $('.trigger').click(function(){
        if(!open){
            
        Moveit.animate(first,{
           start:'78%',
           end:'93%',
           duration:1,
           timing:timing
       }); 
        Moveit.animate(middle,{
           start:'50%',
           end:'50%',
           duration:1,
            timing:timing
       });
        Moveit.animate(second,{
           start:'81.5%',
           end:'94%',
           duration:1,
            timing:timing
       }); 
        }else{
            
           Moveit.animate(first,{
           start:'0%',
           end:'14%',
           duration:1,
           timing:timing
       }); 
        Moveit.animate(middle,{
           start:'0%',
           end:'100%',
           duration:1,
           timing:timing
       });
        Moveit.animate(second,{
           start:'0%',
           end:'11.5%',
           duration:1,
           timing:timing
       });  
        }
       open = !open;
    });
});