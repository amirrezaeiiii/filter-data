const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "react.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function filterData(data, filter) {
  return data.filter((note) =>
    note.title.toLowerCase().includes(filter.toLowerCase().trim())
  );
}

function sortData(data, sortBy) {
  if (sortBy === "earliest") {
    return [...data].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }

  if (sortBy === "latest") {
    return [...data].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

function statusData(data, status) {
  switch (status) {
    case "all": {
      return data;
    }
    case "completed": {
      return data.filter((n) => n.completed);
    }
    case "uncompleted": {
      return data.filter((n) => !n.completed);
    }
    default:
      return data;
  }
}

function queryData(data, { filter, sortBy, status }) {
  let filteredData;

  filteredData = filterData(data, filter);
  filteredData = sortData(filteredData, sortBy);
  filteredData = statusData(filteredData, status);

  return filteredData;
}

console.log(queryData(notesList, { sortBy: "earliest", filter: "rea", status: "all" }));
