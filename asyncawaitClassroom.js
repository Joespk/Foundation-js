const fetchData = () => Promise.reject("data not found");

const getData = async () => {
  try {
    const res = await fetchData();
    console.log("yo");
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("done");
  }
};

getData();
