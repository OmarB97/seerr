import type { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIgnoreQuotaToMediaRequest1777103595541 implements MigrationInterface {
  name = 'AddIgnoreQuotaToMediaRequest1777103595541';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "media_request" ADD "ignoreQuota" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "media_request" DROP COLUMN "ignoreQuota"`
    );
  }
}
