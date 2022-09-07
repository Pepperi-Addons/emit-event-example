import '@pepperi-addons/cpi-node'

export async function load(configuration: any) {
    pepperi.events.intercept("TSAButtonPressed" as any, {}, async (data): Promise<any> => {
    //pepperi.events.intercept("finish" as any, {}, async (data): Promise<any> => {
        debugger
        return {
            randomNumber: Math.random() * 1000 
        }
    });
}