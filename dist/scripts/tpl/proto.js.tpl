export const ${class} = (val) => {
  const result = new RootProto(${root}, '${type}', ${max}, ${min})
  val && result.assign(val)
  return result
}
${class}.minType = ${min}
${class}.maxType = ${max}
${class}.uri = URI(${max}, ${min})
${class}.types = [${max}, ${min}]
${class}.key = '${name}.${class}'
