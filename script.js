// Fetch data for restaurant recommendation
fetch('restaurant.json')
  .then(response => response.json())
  .then(data => {
    const restaurantInfo = document.getElementById('restaurant-info');
    restaurantInfo.innerHTML = `
      <h2>${data.name}</h2>
      <p>Location: ${data.city} (Lat: ${data.lat}, Long: ${data.long})</p>
      <p>Recommended Dish: ${data.what_to_eat}</p>
    `;
  })
  .catch(error => console.error('Error fetching restaurant data:', error));

// Event listener for autonomous vehicle dilemma
const dilemmaBtn = document.getElementById('dilemma-btn');
dilemmaBtn.addEventListener('click', () => {
  fetch('dilemma.json')
    .then(response => response.json())
    .then(data => {
      const dilemmaResult = document.getElementById('dilemma-result');
      dilemmaResult.innerHTML = `
        <h2>Autonomous Vehicle Dilemma</h2>
        <p>Case 1: ${data.case_1.swerve ? 'Swerve' : 'Do Not Swerve'} - ${data.case_1.reason}</p>
        <p>Case 2: ${data.case_2.swerve ? 'Swerve' : 'Do Not Swerve'} - ${data.case_2.reason}</p>
      `;
    })
    .catch(error => console.error('Error fetching dilemma data:', error));
});

// Fetch Fed Funds rate prediction
fetch('prediction.json')
  .then(response => response.json())
  .then(data => {
    const predictionInfo = document.getElementById('prediction-info');
    predictionInfo.innerHTML = `
      <h2>Fed Funds Rate Prediction</h2>
      <p>Rate for December 2025: ${data.rate} (${data.reason})</p>
    `;
  })
  .catch(error => console.error('Error fetching prediction data:', error));