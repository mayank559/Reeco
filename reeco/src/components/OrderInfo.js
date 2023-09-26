import react from 'react'
import Typography from '@mui/material/Typography';



const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid rgba(0, 0, 0, 0.2)',
    paddingBottom: '10px',
    paddingRight:'20px'

};

const valueStyle = {
    fontWeight: 'bold',
};

const OrderInfo = () => {
    return (
        <>
            <div style={{
                display: 'flex',boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' , marginTop: '30px',
                marginLeft: '40px', width:'1150px',justifyContent:'space-between',padding:'20px'
            }}>
                <div style={sectionStyle}>
                    <Typography variant="subtitle1">Supplier:</Typography>
                    <Typography variant="subtitle1" style={valueStyle}>
                        Supplier Name
                    </Typography>
                </div>
                <div style={sectionStyle}>
                    <Typography variant="subtitle1">Shipping Date:</Typography>
                    <Typography variant="subtitle1" style={valueStyle}>
                        2023-09-30
                    </Typography>
                </div>
                <div style={sectionStyle}>
                    <Typography variant="subtitle1">Total:</Typography>
                    <Typography variant="subtitle1" style={valueStyle}>
                        $100.00
                    </Typography>
                </div>
                <div style={sectionStyle}>
                    <Typography variant="subtitle1">Category:</Typography>
                    <Typography variant="subtitle1" style={valueStyle}>
                        Electronics
                    </Typography>
                </div>
                <div style={sectionStyle}>
                    <Typography variant="subtitle1">Department:</Typography>
                    <Typography variant="subtitle1" style={valueStyle}>
                        Sales
                    </Typography>
                </div>
                <div style={{marginRight:'50px'}}>
                    <Typography variant="subtitle1">Status:</Typography>
                    <Typography variant="subtitle1" style={valueStyle}>
                        In Progress
                    </Typography>
                </div>
            </div>
        </>
    )
}
export default OrderInfo;