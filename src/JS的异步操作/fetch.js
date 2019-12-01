
/**
 * 示例一
 */

function fetch() {
    return (
      fetchData()
      .then(() => {
        return "done"
      })
    )
 }
  
async function fetch() {
    await fetchData()
    return "done"
  };
  let result = fetch();
console.log(result)