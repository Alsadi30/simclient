import Col from '../../components/colum'
import { Link } from 'react-router-dom'

const SimRow = ({sim}) => {

    return (
        <table>
        <tr>
            <Col val={sim.simNumber} num={1} />
            <Col val={sim.operatorName} num={1} />
            <Col val={sim.ICCID} num={1} />
            <Col val={sim.cost} num={1} />
            <Col val={sim.orderedAt} num={1} />
            <th><Link to={`/sim/attachment/${sim.id}`} > Sale </Link></th>
            </tr>
            </table>
    )

}


export default SimRow