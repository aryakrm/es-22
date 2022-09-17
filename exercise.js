let primitive = 13;
switch (typeof primitive) {
  case "string":
    console.log("Primitive is String");
    break;
  case "number":
    console.log("Primitive is Number");
    break;
  default:
    console.log("Primitive is Boolean");
}
