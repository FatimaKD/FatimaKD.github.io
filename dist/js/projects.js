// TODO: 
// - Switch Rostr up first.
// - Edit content, remove the technology for each.

var pageView = 1; // by default it's BitStat
var defaultProject = "bitstat";
$(".project-git a")[0].setAttribute(
    "href", $(".project-git a")[0].getAttribute("href").replace(":project",defaultProject)
);
$(".project-read")[0].setAttribute("href",$(".project-read")[0].getAttribute("href").replace(":project",defaultProject));

$(".page").click(function () {
    $(".page").removeClass("page-active");
    $(this).addClass("page-active")
    pageView = this.innerHTML;
    $(".page-switcher").hide().fadeIn('fast');    //debug for chrome;
    setUpContent(pageView);
});


function setUpContent(pageView) {
    var projectName = $(".project-name")[0];
    var content = $(".project-content")[0];


    switch (pageView) {
        case "1": 
            projectName.innerHTML = "Prayminder";
            content.innerHTML = "Prayminder is an android application that notifies the user when prayertime starts. Prayminder is developed with java.";
            
            break;

        case "2":
            projectName.innerHTML = "Pet Care";
            content.innerHTML = "Webiste that will help any pet store either from the manager's side or the pet owner's side.";
            
            break;
        case "3":
            projectName.innerHTML = "Momery Cards";
            content.innerHTML = "Level up your memory for free with this online memory card game. Flip the cards and match the cards."
        
            break;
    }
    
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
  