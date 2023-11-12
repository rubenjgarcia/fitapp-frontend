import ActionBar from './components/ActionBar'
import PlanListContent from './components/PlanListContent'
import NewPlanDialog from './components/NewPlanDialog'
import Container from '@/components/shared/Container'
import reducer from './store'
import { injectReducer } from '@/store'

injectReducer('planList', reducer)

const PlanList = () => {
    return (
        <Container className="h-full">
            <ActionBar />
            <PlanListContent />
            <NewPlanDialog />
        </Container>
    )
}

export default PlanList
