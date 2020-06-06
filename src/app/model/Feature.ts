export class Feature {
	name: string;
	value: string;
    uiStyle: string;
    featureId: number;
    
    static fromHttp(httpResponse: Feature): Feature{
        const feature = new Feature();

        if(!httpResponse)
        return feature;

        feature.name = httpResponse.name;
        feature.value = httpResponse.value;
        feature.uiStyle = httpResponse.uiStyle;
        feature.featureId = httpResponse.featureId;

        return feature;
    }
}
