import { FC, ReactNode } from "react"

type ContainerWrapperType = {
    children: ReactNode
}

const ContainerWrapper: FC<ContainerWrapperType> = ({ children }) => {
    return (
        <div className=" max-w-6xl mx-auto min-h-[calc(100dvh-64px)] py-4 grid">
            {children}
        </div>
    )
}

export default ContainerWrapper