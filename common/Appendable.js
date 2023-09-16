class Appendable {
  baseNode = null;
  appendTo(target) {
    target.appendChild(this.baseNode);
  }
}

export default Appendable;
