const PORT = process.env.PORT || 3030;
const app = require("./server");

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
