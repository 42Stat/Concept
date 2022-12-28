const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const componenets = document.querySelectorAll('.userDetailComponent');

componenets.forEach((curr) => {
  curr.addEventListener('mouseenter', () => {
    curr.setAttribute('class', 'userDetailComponentHover');
  });
  curr.addEventListener('mouseleave', () => {
    curr.setAttribute('class', 'userDetailComponent');
  });
  curr.addEventListener('click', () => {
    curr.setAttribute('class', 'userDetailComponentHover');
  });
});
