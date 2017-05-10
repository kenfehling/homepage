Array.prototype.max = () => Math.max.apply(null, this)
Array.prototype.min = () => Math.min.apply(null, this)

Array.prototype.joinIgnoreNulls = function(delim) {
  return this.filter(x => x).join(delim)
}