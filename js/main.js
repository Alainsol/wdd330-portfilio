const links = [
    {
      label: "Week1 notes",
      url: "week-1/index.html"
    },
    {
      label: "Week2 notes",
      url: "week-2/week02.html"
    },

    {
      label: "Week3 notes",
      url: "week-3/week03.html"
    },
    {
      label: "Week4 notes",
      url: "week-4/week04.html"
    },
    {
      label: "Week5 notes",
      url: "week-5/week05.html"
    },
    {
    label: "Week6 todolist",
    url: "week-6/todoweek06.html"
  },

  {
    label: "Week7 notes",
    url: "week-7/week07.html"
  },
  {
  label: "Week8 notes",
    url: "week-8/week08.html"
  },
  {
  label: "Week9 notes",
  url: "week-9/week09.html"
},
{
  label: "Week10 notes",
  url: "week-10/week10.html"
},
{
  label: "Week11 notes",
  url: "week-11/week11.html"
},
  ];
  





  
const worklist = document.getElementById('listwork');

for(let i = 0; i < links.length; i++) {
    const menu = document.createElement('li');
    const link = document.createElement('a');
    link.href = links[i].url;
    link.innerHTML = links[i].label;
    menu.appendChild(link);
    worklist.appendChild(menu);
}
              