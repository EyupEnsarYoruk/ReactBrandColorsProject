import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={85}
    viewBox="0 0 500 85"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="580" cy="165" r="20" /> 
    <rect x="132" y="21" rx="0" ry="0" width="60" height="44" /> 
    <rect x="207" y="21" rx="0" ry="0" width="60" height="44" /> 
    <rect x="280" y="21" rx="0" ry="0" width="60" height="44" /> 
    <rect x="354" y="21" rx="0" ry="0" width="60" height="44" /> 
    <rect x="19" y="34" rx="0" ry="0" width="91" height="19" />
  </ContentLoader>
)

export default Loader