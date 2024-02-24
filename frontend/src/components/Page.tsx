import { Box, styled } from "@mui/material";
import { Fragment, forwardRef } from "react";
import SuspenseErrorBoundary from "./RequireComponent/SuspenseErrorBoundry";
import ProtectedRoute from "./ProtectedRoutes";

const MainStyle = styled('main', {
    shouldForwardProp: (prop) => prop !== 'canVerticalNavbarCollapse',
    // eslint-disable-next-line 
})(({  }: any) => ({
    flexGrow: 1,
}));


export const Page = forwardRef(({ Component, roleRequired, ...props }: any, ref) => {

    return (
        <Fragment>
            {/* <Helmet>
                <title>{`${titleToShow} | Smart Marketing`}</title>
                {meta}
            </Helmet> */}

            {/* eslint-disable-next-line   */}
            {/* @ts-ignore */}
            <MainStyle>
                <ProtectedRoute roleRequire={roleRequired}>
                    <SuspenseErrorBoundary>
                        <Box ref={ref} sx={{ minHeight: '100vh' }}>
                            {/* eslint-disable-next-line   */}
                            {/* @ts-ignore */}
                            <Component {...props} />
                            {/* eslint-disable-next-line   */}
                        </Box>
                    </SuspenseErrorBoundary>
                </ProtectedRoute>
            </MainStyle>
        </Fragment>
    )
});
