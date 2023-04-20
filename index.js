//updates the total poinst spend when clicking on track options
function updateTotalPointsSpend() {
  let Total = 0;
  //get all selected options for all tracks
  var SelectedTrackListOptions = document.querySelectorAll("input:checked");
  //add up all values of the selected options (which is equal to the total cost of the selected option and its sub-options)
  for (let i = 0; i < SelectedTrackListOptions.length; i++) {
    Total += parseInt(SelectedTrackListOptions[i].value);
  }
  document.getElementById("TotalPointsSpend").innerHTML = "<i>" + Total + " points spend.</i>";
}

document.addEventListener("DOMContentLoaded", () => {
  //make list of TRACKS (that you can spend your World Ability Points on) --- takes data from const TRACKS as defined on line 21
    var TrackListContent = document.getElementsByName('TrackList')[0];
    var IteratorForID = 0;
    /*Adds html code for the TRACKS.
    id = IteratorForID  to pair the input tag with the label tag
    type = radio        to ensure you can only choose one option per track.
    onclick='updateTotalPointsSpend()'  to call a function that updates the Total Points Spend variable.
    name = Track        to group radio buttons (to ensure you can only choose one option per track)
    value = TrackCost   to easily summize the total World Ability Point cost of selected ability
    label               to give a name to our available option (and hooks into css coloring)
    */
    for (let Track in TRACKS) {
      //TrackCost is the total cost of the option and the lower tiers
      let TrackCost = 0;
      //add Track name
      TrackListContent.innerHTML += "<b>" + Track + ":</b><br>";
      //add the default 0 value
      TrackListContent.innerHTML += "<input id='" + IteratorForID
        + "' type='radio' onclick='updateTotalPointsSpend()' name='" + Track
        + "' value='0' checked='checked' />"
        + "<label for='" + IteratorForID + "'> 0 </label>";
      IteratorForID++;
      //add Track Options
      for (let i = 0; i < TRACKS[Track].length; i++) {
        TrackCost += TRACKS[Track][i];
        TrackListContent.innerHTML += "<input id='" + IteratorForID
          + "' type='radio' onclick='updateTotalPointsSpend()' name='" + Track
          + "' value='" + TrackCost + "'/>"
          + "<label for='" + IteratorForID + "'> " + TRACKS[Track][i] + " </label>";
        IteratorForID++;
      }
      TrackListContent.innerHTML += "<br>";
    }
});//end of document ready function
