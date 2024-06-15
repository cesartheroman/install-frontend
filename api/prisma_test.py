import asyncio
from prisma import Prisma
from prisma.models import User
import InstallUserFunctions

async def main() -> None:
    db = Prisma(auto_register=True)
    await db.connect()

    appliance = await InstallUserFunctions.createAppliance(db,"chad@joininstall.com","dryer",12121,"XXR-40")

    print(appliance)

    # user = await db.user.find_unique(
    #     where={
    #         'email': 'erick@joininstall.com',
    #     }
    # )
    #
    # # print(user.id)
    # dryer = {
    #     'applianceType': 'gas',
    #     'applianceModelId': 'XXR-40',
    #     # 'owner': user,
    #     'ownerId': user.id
    # }
    #
    # # adddryer = await db.dryer.create(
    # #     data=dryer
    # # )
    #
    # finddryer = await db.dryer.find_unique(
    #     where={
    #         'ownerId': user.id
    #     }
    # )
    #
    # print(finddryer.applianceType)


    await db.disconnect()

if __name__ == '__main__':
    asyncio.run(main())