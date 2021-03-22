function Small ({small,name}) {
    if (small == "yes") {
      return(
        <div class = "spbox">{name}</div>
      )
    }
    return (<div>{name}</div>)
}

export default Small