const items = [
  {
    id: 1,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 2,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 3,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 4,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 5,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 6,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 7,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 8,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 9,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 10,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 11,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
  {
    id: 12,
    title: "sunil",
    description: "24",
    img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/01/illustrations-cover.jpg",
    link: "test",
  },
];

$(function () {
  const newItems = [];
  const numberItemOfEachPage = 4;
  for (let i = 0; i < items.length; i += numberItemOfEachPage) {
    const page = items.slice(i, i + numberItemOfEachPage);
    newItems.push(page);
  }

  document.getElementById("item-sale").innerHTML = newItems
    .map(
      (group, index) =>
        `<div class="carousel-item ${index === 0 && "active"}">
        <div class="container text-center">
            <div class="row align-items-start">
                ${group.map(
                  (item) => `
                 <div class="col">
                     <div class="card">
                         <img src=${item.img}
                             class="card-img-top" alt="...">
                         <div class="card-body">
                             <h5 class="card-title">${item.title}</h5>
                             <p class="card-text">${item.description}</p>
                         </div>
                     </div>
                 </div>`
                )}
            </div>
        </div>
    </div>`
    )
    .join("");
});
