
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { login } from '../../store/auth/authSlice'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckinAuth } from '../ui/components/CheckinAuth'

export const AppRouter = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            // console.log(user);
            if (!user) return dispatch('logout')
            const { uid, email, displayName, photoURL } = user
            dispatch(login({ uid, email, displayName, photoURL }))
        })
    }, [])


    if (status === 'checking') return <CheckinAuth />

    return (
        <Routes>
            {
                status === 'authenticated' ?
                <Route path='/*' element={<JournalRoutes />} /> :
                <Route path='/auth/*' element={<AuthRoutes />} />
            }

            <Route path='*' element={<Navigate to={'/auth/login'}/>} />

            {/* Login y registro */}
            {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}
            {/* JournalApp */}
            {/* <Route path='/*' element={<JournalRoutes />} /> */}
        </Routes>
    )
}
