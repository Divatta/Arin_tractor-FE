import CommonBanner from '../Components/CommonBanner'
import '../scss/Clients.scss'

function Clients() {
  return (
   <>
   <CommonBanner title="Clients"/>
     <div className='clients'>
        <div className="logos">
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
        </div>
    </div>
   </>
  )
}

export default Clients
