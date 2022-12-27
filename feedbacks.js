const feedbacks = document.querySelectorAll('.feedbackContainer');

feedbacks.forEach((curr) => {
  curr.addEventListener('mouseenter', () => {
    curr.setAttribute('class', 'feedbackContainerBright');
  });

  curr.addEventListener('mouseleave', () => {
    curr.setAttribute('class', 'feedbackContainer');
  });
});

const flag = document.querySelector('.flagFilter');

flag.addEventListener('mouseenter', () => {
  flag.setAttribute('class', 'flagFilterBright');
});

flag.addEventListener('mouseleave', () => {
  flag.setAttribute('class', 'flagFilter');
});
