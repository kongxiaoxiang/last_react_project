//引入UI组件 
import Person from '../components/Person'
//引入connect方法
import {connect} from 'react-redux'
//引入action
import {addPersons} from '../redux/actions/person'

export default connect(
  state => (
    {
      persons:state.persons,
      count:state.number
    }
  ),
  {addPersons}
)(Person)