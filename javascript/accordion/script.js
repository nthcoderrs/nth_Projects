const data = [
  {
    id : "1",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  {
    id : "2",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  {
    id : "3",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  {
    id : "3",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  {
    id : "3",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  {
    id : "3",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  {
    id : "3",
    title : "what the fuck I want ??",
    content : "I fucking dont know this shit",
  },
  
]

const accordion = document.querySelector(".accordion");

function createAccordion() {
  accordion.innerHTML = data.map((dataItem) => (
    `
    <div class="accordion-item">
      <div class = "accordion-title">
        <h3>${dataItem.title}</h3>
        <i class = "fa-solid fa-arrow-down"></i>
      </div>
      <div class = "accordion-content">
        <p>${dataItem.content}</p>
      </div>
    </div>
    
    `
  ))
  .join("");
}

createAccordion();

const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", () => {
    if(currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    }else {
      let getAllActiveTitles = document.querySelectorAll(".active");

      getAllActiveTitles.forEach((activeTitle) => {
        activeTitle.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  })
}
)