var messages =[
 'hello',
 'Rishi this side',
 'nice to meet u ,there is something for you ',
 'sooo should i say',
 'disclaimer : jyada expect hi maat karna , bolu toh',
 'Tu samjhdar bhi hei,...',
 'Tu cuteee bhi hei...',
 'tu pyarrriiii bhi hei',
 'haan main cheez hosiyaarr bhi ',
 'chuggguuu Adya',
 'Itna hi tha yeh ',
 'Back jake or ek dekh'
 ];

var i=0;
var icon  = document.getElementById('icon');
var rMessage = document.getElementById('rMessage');


window.onload = function(){
  
     rMessage.textContent = messages[0];

     

(function firstMessage(){
    icon.classList.remove('hide');
    setInterval(message, 1000);
}());

function message(){
    rMessage.classList.remove('hide');
    rMessage.id ='';
  };

};



var submit = document.getElementById('submit');

submit.onclick = function(){
  var area = document.getElementsByTagName('textarea')[0];
  var mSection = document.getElementById('bla');
  var mSSection = document.getElementById('messages');
  var userMess = mSection.children[1].cloneNode(true);

      userMess.textContent = area.value;
      userMess.classList.add('right','clear');
      mSSection.appendChild(userMess);
      area.value = '';
      mSSection.scrollTop+=80;
  var inti = setInterval(replay,1000);

function replay(){
   
   

  var rep = mSSection.firstElementChild.cloneNode(true);
            mSSection.appendChild(rep);
  var select = document.getElementsByClassName('tex');
           
  for(var x= 2 ; x< select.length; x = x+2){
            
        if(select[x].id == ''){
              
              select[x].id = i+1;
          var rMessage = document.getElementById(i+1);
           
                    
                      rMessage.textContent = messages[i+1];
                    

                   
            };

          };

        clearInterval(inti);
          i++;
       
        

        mSSection.scrollTop+=80;

      };
       
};