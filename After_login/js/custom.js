

$(document).ready(function(){
	 $("#icon-travel_and_tourism").click(function(){
        $("#banking, #money_transfer, #utilities, #telecom, #aadhaar_services").hide();
		$("#travel_and_tourism").fadeIn();
	   $(".our_services ul li.active").removeClass("active");
	 $(this).parent().addClass('active');
    });	
	
	 $("#icon-banking").click(function(){
        $("#travel_and_tourism, #utilities, #money_transfer, #telecom, #aadhaar_services").hide();
		$("#banking").fadeIn();
	   $(".our_services ul li.active").removeClass("active");
	 $(this).parent().addClass('active');
    });	
	
	 $("#icon-utility_payment").click(function(){
        $("#money_transfer, #telecom, #aadhaar_services, #travel_and_tourism, #banking").hide();
		$("#utilities").fadeIn();
	   $(".our_services ul li.active").removeClass("active");
	 $(this).parent().addClass('active');
    });	
	
	 $("#icon-money_transfer").click(function(){
        $("#telecom, #aadhaar_services, #travel_and_tourism, #banking, #utilities").hide();
		$("#money_transfer").fadeIn();
	   $(".our_services ul li.active").removeClass("active");
	 $(this).parent().addClass('active');
    });	
	
	 $("#icon-telecom").click(function(){
        $("#aadhaar_services, #travel_and_tourism, #banking, #utilities, #money_transfer").hide();
		$("#telecom").fadeIn();
	   $(".our_services ul li.active").removeClass("active");
	 $(this).parent().addClass('active');
    });	
	
 $("#icon-aadhaar_services").click(function(){
        $("#travel_and_tourism, #banking, #utilities, #money_transfer, #telecom").hide();
		$("#aadhaar_services").fadeIn();
		 $(".our_services ul li.active").removeClass("active");
		$(this).parent().addClass('active');
    });
		

$("#login-btn, #proceed-btn").click(function(){
	$(".after-address, #paynow-btn").show();
	$("#checkout-btn").hide();
	});
		 $("#NewAddress").click(function(){ 
		 $("#billing-address").slideDown();
	 });
	 
	 $("#SameAddress").click(function(){ 
		 $("#billing-address").fadeOut();
	 });
	 
	 $("#shopping_card").click(function(){
	$(".review_cart_section").fadeIn();
	$(".product_section, .rd_services").fadeOut();	
		});
		
$("#shopping_card_01").click(function(){
	$(".rd_services").fadeIn();
	$(".review_cart_section, .product_section").hide();	
		});
	
	
	 $("#proceed-btn").click(function(){
	$(".review_cart_section").show();
	$(".product_section, rd_services").hide();	
		$("#main_01, #main_02").hide();
		});

	
$("#Signupmobile").click(function(){
        $("#mobile-div").fadeIn();
		$("#aadhaar-div").hide();
    });
    
	  $("#SignupAadhaar").click(function(){
        $("#mobile-div").hide();
		$("#aadhaar-div").fadeIn();
    });
    
	 $("#SendOTP").click(function(){
		$("#otp-info, #enter-otp").fadeIn(1000);
		$('#otp-box, #resend-btn').prop('disabled', false);
    });
	 
	  $("#SendOTP1").click(function(){
		$("#otp-info1, #enter-otp1").fadeIn(1000);
		$('#otp-box1, #resend-btn1').prop('disabled', false);
    });
	 

	 $("#NewAddress1").click(function(){ 
		 $("#billing-address1").fadeIn();

	 });
	 
	 $("#SameAddress1").click(function(){ 
		 $("#billing-address1").fadeOut();

	 });
	 
	 
	 $("#apply-promo").click(function(){ 
		 $("#promo-code").fadeIn();

	 });
	$("#SendOTP").click(function(){
        $("#Enter_OTP_Select_Quantity").fadeIn();
		$("#genrt").hide();
    });
    
	$("#SendOTP").click(function(){
        $("#Enter_OTP_Select_Quantity").fadeIn();
		$("#genrt").hide();
    });
	 
	 $("#Submit").click(function(){
        $("#Tokens_Generated_Successfully").fadeIn();
		$("#genrt, #Enter_OTP_Select_Quantity").hide();
    });
	
 $("#resnd_btn").click(function(){
        $("#resend_div").fadeIn();
		$("#genrt, #Enter_OTP_Select_Quantity").hide();
    });

	
	 $("#SendOTP_resend").click(function(){
        $("#Enter_OTP").fadeIn();
		$("#genrt, #Enter_OTP_Select_Quantity, #resend_div").hide();
    });
	
	 $("#Submit_otp").click(function(){
        $("#Tokens_Sent_Successfully").fadeIn();
		$("#genrt, #Enter_OTP, #Enter_OTP_Select_Quantity").hide();
    });


$("#summarybtn1, #summarybtn2").click(function(){
	$("#signup-success").show();
	$(".rtabs, .nav-tabs, #Pdetail1, #PDetail").hide();	
	
	});
	
$("#bm_partner").click(function(){
        $("#recvd_msg").fadeIn();
		$("#bcm_partner").hide();
    });



	    $('.mdb-select').material_select();
		
});


$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});




   $(document).on("click",'#AddRow',function(){  

                 var $mytable = $('.dependent').find("tbody");

                  $last_row = $mytable.find("tr:last").prev('tr');

                  $new_row = $last_row.clone();

                  $last_row.after($new_row);

           });   
	
	        $(document).on("click",'#DeleteRow',function(){  

                 var $mytable = $('.dependent').find("tbody");
              $(this).closest('tr').remove();
                return false;

           }); 
	



$(document).ready(function(){
    $('#menu-show').click(function(event){
        event.stopPropagation();
        $( "#mySidenav" ).show().addClass("animated slideInRight");
		$( "#mySidenav" ).removeClass("slideOutRight");
		$( "#sidenav-overlay" ).show();
    });
	
	$('#close-nav').click(function(event){
        event.stopPropagation();
        $( "#mySidenav" ).addClass("slideOutRight");
		$( "#sidenav-overlay" ).hide();
		
    });
});

$(document).click(function(e){
    var targetbox = $('#mySidenav');
    if(!targetbox.is(e.target) && targetbox.has(e.target).length === 0){
       $( "#mySidenav" ).addClass("animated slideOutRight");
		$('#sidenav-overlay').hide();
    }
});

$('#myCollapsible').collapse({
  toggle: false
})
$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})