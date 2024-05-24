import _base from "./base";

_base._app.listen(_base._port, () => {
  console.log(`Server is running at http://localhost:${_base._port}`);
});
