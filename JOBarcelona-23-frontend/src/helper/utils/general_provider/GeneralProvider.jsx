import QueryProvider from "../../../helper/utils/react_query_provider/QueryProvider"

const GeneralProvider = ({ children }) => {
    return (
        <QueryProvider>
            {children}
        </QueryProvider>
    )
}

export default GeneralProvider