/**
 * Flex Style Object
 * @params type = verticalPos | verticalCenter | horizontalCenter | centerBoth
 * If Type is not defined then return initial props
 */
 export const flexStyle = ({flexType=null}) => {
    const initialProps = {
        display: 'flex',
        flexDirection: 'row',
    }
    const typeMethod = {
        verticalPos: function(){
            return {
                ...initialProps,
                flexDirection: 'column'
            }
        },
        verticalCenter: function(){
            return {
                ...this.verticalPos(),
                justifyContent: 'center'
            }
        },
        horizontalCenter:function(){
            return {
                ...initialProps,
                justifyContent: 'center'
            }
        },
        centerBoth:function() {
            return {
                ...this.horizontalCenter(),
                alignItems: 'center'
            }
        }
    }
    if(flexType)
        return typeMethod[flexType]();
    return initialProps;
 }