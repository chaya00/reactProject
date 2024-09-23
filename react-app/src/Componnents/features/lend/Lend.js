

const Lend=({lend})=>{
    return(
        <>
        <h1>lend</h1>
        <h1>{lend.id}</h1>
        <h3>{lend.date}</h3>
        <h1>times</h1>
        <h3>{lend.takeHour}:00</h3>
        <h3>{lend.returnHour}:00</h3>
        </>
    )
}
export default Lend;

// public int ProductId { get; set; }
// public Product Product { get; set; }
// public int UserId { get; set; }
// public User User { get; set; }
