import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const SuspenseErrorBoundary = ({ children }: any) => {

    return (
        <ErrorBoundary fallbackRender = { () => <div>Error occurred!</div >} >
            <Suspense>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export default SuspenseErrorBoundary;