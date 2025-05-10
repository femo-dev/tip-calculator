export default function OrderTotals() {
  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total & Tip:</h2>
            <p>
                Subtotal to Pay: {' '}
                <span className="font-bold">$0</span>
            </p>

            <p>
                Tip: {' '}
                <span className="font-bold">$0</span>
            </p>

            <p>
                Total to Pay: {' '}
                <span className="font-bold">$0</span>
            </p>            
        </div>
        
        <button></button>
    </>
  )
}
