import { ScrollView, View } from "react-native";
import appContentStyles from "./style";
import React from "react";


type AppContentProps = {
    children?: React.ReactNode
}
export default function AppContent ({children}:AppContentProps){
    return (<ScrollView style={appContentStyles.container}>
        {children}
    </ScrollView>)
}