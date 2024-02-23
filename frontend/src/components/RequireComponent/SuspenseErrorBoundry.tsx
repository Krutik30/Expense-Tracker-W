import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SuspenseAndErrorBoundary = ({ children }: any) => {

    return (
        <ErrorBoundary fallbackRender = { () => <div>Error occurred!</div >} >
            <Suspense>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export default SuspenseAndErrorBoundary;