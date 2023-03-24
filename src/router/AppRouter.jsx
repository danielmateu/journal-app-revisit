
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckinAuth } from '../ui/components/CheckinAuth'

export const AppRouter = () => {

    const {status} = useSelector(state => state.auth)

    if(status === 'checking') return <CheckinAuth/>

    return (
        <Routes>
            {/* Login y registro */}
            <Route path='/auth/*' element={<AuthRoutes />} />
            {/* JournalApp */}
            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
    )
}
