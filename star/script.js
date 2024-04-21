// Initial Ratings
const ratings = {
  rates: 2,
};

const starsTotal = 5;

document.addEventListener("DOMContentLoaded", getRatings);

// Get ratings
function getRatings() {
  for (let rating in ratings) {

    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}
